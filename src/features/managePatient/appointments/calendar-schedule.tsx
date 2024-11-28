"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Ban } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"; // Import Shadcn Dialog components
import { getWeekDays, getStartOfWeek, isSameDay, formatMonthYear } from "@/utils/date";
import DataFetcher from "@/utils/DataFetcher";

const isToday = (date: Date) => isSameDay(date, new Date());

const timeSlots = Array.from({ length: 13 }, (_, i) => ({
  label: `${i + 8 > 12 ? i + 8 - 12 : i + 8} ${i + 8 < 12 ? "AM" : "PM"}`,
  hour: i + 8, // 24-hour format
}));

// Define a color palette for appointment cards based on time
const appointmentColors = [
  "bg-red-50 border-red-200 text-red-900",
  "bg-orange-50 border-orange-200 text-orange-900",
  "bg-yellow-50 border-yellow-200 text-yellow-900",
  "bg-green-50 border-green-200 text-green-900",
  "bg-teal-50 border-teal-200 text-teal-900",
  "bg-blue-50 border-blue-200 text-blue-900",
  "bg-indigo-50 border-indigo-200 text-indigo-900",
  "bg-purple-50 border-purple-200 text-purple-900",
  "bg-pink-50 border-pink-200 text-pink-900",
  "bg-gray-50 border-gray-200 text-gray-900",
  "bg-lime-50 border-lime-200 text-lime-900",
  "bg-emerald-50 border-emerald-200 text-emerald-900",
  "bg-cyan-50 border-cyan-200 text-cyan-900",
];

// Function to get the color for an appointment based on its hour
const getAppointmentColor = (hour: number) => {
  const index = (hour - 8) % appointmentColors.length; // Map hour to a color index
  return appointmentColors[index];
};

// Extract the text color from a class string
const getTextColorFromClass = (colorClass: string) => {
  const match = colorClass.match(/text-[a-z-]+/);
  return match ? match[0] : "text-gray-900"; // Default to gray text if no match
};

const getEventDuration = (startTime: string, endTime: string) => {
  const start = parseInt(startTime.split(":")[0], 10);
  const end = parseInt(endTime.split(":")[0], 10);
  const duration = end - start || 1; // Ensure at least a height for overlapping appointments
  return `calc(${duration * 100}% - 8px)`;
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function CalendarSchedule() {
  const [currentWeek, setCurrentWeek] = React.useState(() => getStartOfWeek(new Date()));
  const [appointments, setAppointments] = React.useState([]);
  const [selectedAppointment, setSelectedAppointment] = React.useState<any>(null); // State to hold selected appointment for the details dialog
  const [appointmentToCancel, setAppointmentToCancel] = React.useState<any>(null); // State to hold appointment for cancellation dialog
  const [cancellationReason, setCancellationReason] = React.useState(""); // State to hold the cancellation reason

  const days = React.useMemo(() => getWeekDays(currentWeek), [currentWeek]);

  React.useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await DataFetcher.fetchAppointments();
        const transformedData = data.map((appointment: any) => ({
          id: appointment.appointment_id,
          title: `${appointment.doctor.staff.user.first_name} ${appointment.doctor.staff.user.last_name}`,
          startTime: new Date(appointment.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
          endTime: new Date(new Date(appointment.date).getTime() + 60 * 60 * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
          date: new Date(appointment.date),
          notes: appointment.notes || "No additional notes.",
          type: "appointment",
        }));
        setAppointments(transformedData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async () => {
    if (!appointmentToCancel || !cancellationReason.trim()) return;

    const appointmentId = appointmentToCancel.id;

    try {
      const response = await fetch(`/api/appointments/${appointmentId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: cancellationReason }),
      });

      if (response.ok) {
        alert("Appointment canceled successfully!");
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== appointmentId)
        );
        setAppointmentToCancel(null);
        setCancellationReason("");
      } else {
        const errorData = await response.json();
        console.error("Error canceling appointment:", errorData);
        alert("Failed to cancel appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handlePreviousWeek = () => setCurrentWeek((prev) => new Date(prev.setDate(prev.getDate() - 7)));
  const handleNextWeek = () => setCurrentWeek((prev) => new Date(prev.setDate(prev.getDate() + 7)));

  const getEventsForDayAndTime = (day: Date, hour: number) =>
    appointments.filter((event) => {
      const eventHour = event.date.getHours(); // 24-hour format
      return isSameDay(event.date, day) && eventHour === hour;
    });

  return (
    <div className="w-full h-full min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{formatMonthYear(currentWeek)}</h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePreviousWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <ScrollArea className="rounded-lg border">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-[auto_repeat(7,1fr)] gap-[1px] bg-gray-200">
              {/* Time Labels */}
              <div className="space-y-[1px]">
                <div className="bg-white p-4 h-14">
                  <span className="sr-only">Time slot</span>
                </div>
                {timeSlots.map((slot) => (
                  <div key={slot.label} className="bg-white h-32 p-4 text-sm text-gray-500">
                    {slot.label}
                  </div>
                ))}
              </div>

              {/* Days */}
              {days.map((day) => (
                <div key={day.date} className="space-y-[1px]">
                  {/* Day Header */}
                  <div
                    className={cn(
                      "bg-white p-4 h-14",
                      isToday(day.full) && "bg-blue-50"
                    )}
                  >
                    <div
                      className={cn(
                        "text-sm font-medium flex items-center gap-1",
                        isToday(day.full) ? "text-blue-600" : "text-gray-900"
                      )}
                    >
                      {day.short} {day.date}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {timeSlots.map((slot) => (
                    <div key={`${day.date}-${slot.label}`} className="relative bg-white h-32">
                      {getEventsForDayAndTime(day.full, slot.hour).map((event) => {
                        const textColor = getTextColorFromClass(getAppointmentColor(event.date.getHours()));
                        return (
                          <Card
                            key={event.id}
                            className={cn(
                              "absolute inset-x-1 top-1 flex flex-col p-2 shadow-sm rounded-md cursor-pointer",
                              getAppointmentColor(event.date.getHours())
                            )}
                            style={{
                              height: getEventDuration(event.startTime, event.endTime),
                            }}
                            onClick={() => setSelectedAppointment(event)} // Open dialog with appointment details
                          >
                            <div className="relative flex justify-between items-start">
                              <span className="text-sm font-medium truncate">{event.title}</span>
                              {/* Cancel Button */}
                              <Button
                                variant="ghost"
                                size="icon"
                                className={cn("absolute right-0 top-0 p-1 hover:bg-transparent", textColor)}
                                aria-label="Cancel appointment"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent dialog from opening
                                  setAppointmentToCancel(event); // Open cancellation dialog
                                }}
                              >
                                <Ban className={`h-4 w-4 ${textColor}`} />
                              </Button>
                            </div>
                            <span className="text-xs text-gray-600">
                              {event.startTime} - {event.endTime}
                            </span>
                          </Card>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Appointment Details Dialog */}
      {selectedAppointment && (
        <Dialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Appointment Details</DialogTitle>
              <DialogDescription>
                <p>
                  <strong>Doctor:</strong> {selectedAppointment.title}
                </p>
                <p>
                  <strong>Date:</strong> {formatDate(selectedAppointment.date)}
                </p>
                <p>
                  <strong>Time:</strong> {selectedAppointment.startTime} - {selectedAppointment.endTime}
                </p>
                <p>
                  <strong>Notes:</strong> {selectedAppointment.notes}
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}

      {/* Cancellation Dialog */}
      {appointmentToCancel && (
        <Dialog open={!!appointmentToCancel} onOpenChange={() => setAppointmentToCancel(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to cancel this appointment?</DialogTitle>
              <DialogDescription>
                Please provide a reason for cancellation.
              </DialogDescription>
              <Input
                placeholder="Reason for cancellation"
                value={cancellationReason}
                onChange={(e) => setCancellationReason(e.target.value)}
                required
              />
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="destructive"
                disabled={!cancellationReason.trim()}
                onClick={handleDelete}
              >
                Cancel Appointment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
