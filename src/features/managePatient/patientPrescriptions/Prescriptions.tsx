'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import DataFetcher from '@/utils/DataFetcher';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

async function fetchPatient(): Promise<any[]> {
  try {
    const patient = await DataFetcher.fetchPatient();
    return [patient];
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
}

async function fetchLabResults(): Promise<any[]> {
  try {
    const results = await DataFetcher.fetchLabResults();
    console.log('Lab Results:', results);
    return results;
  } catch (error) {
    console.error('Error fetching lab results:', error);
    throw error;
  }
}

async function fetchPrescriptions(): Promise<any[]> {
  try {
    const prescriptions = await DataFetcher.fetchPrescriptions();
    return prescriptions;
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    throw error;
  }
}

const PatientPrescriptions = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [patientPrescription, setPatientPrescription] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserAndPatient = async () => {
      try {
        const userResponse = await axios.get('/api/users/user-2');
        if (userResponse.status === 200) {
          setUser(userResponse.data);
        } else {
          console.error('Failed to fetch user data.');
        }

        const prescriptions = await fetchPrescriptions();
        setPatientPrescription(prescriptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndPatient();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {loading ? (
        <div className="space-y-4 pt-12">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      ) : user ? (
        <Card className="pt-8 border-none shadow-none">
          <h2 className="text-2xl font-semibold mb-6">Prescriptions Overview</h2>
          {patientPrescription.map((prescription, index) => (
            <Card className="w-[350px]" key={index}>
              <CardHeader>
                <CardTitle>{prescription.medication}</CardTitle>
                <CardDescription>
                  {prescription.dosage}
                  <br />
                  {prescription.instructions}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Prescribed By</Label>
                      <CardDescription>
                        {/* Access the doctor's first and last name */}
                        {prescription.doctor?.staff?.user
                          ? `Dr. ${prescription.doctor.staff.user.first_name} ${prescription.doctor.staff.user.last_name}`
                          : 'No Doctor Assigned'}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Payment Method</Label>
                      <Select>
                        <SelectTrigger id="payment">
                          <SelectValue placeholder="Select method of payment" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Credit Card</SelectItem>
                          <SelectItem value="sveltekit">Debit</SelectItem>
                          <SelectItem value="astro">Apple Pay</SelectItem>
                          <SelectItem value="nuxt">Paypal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Discard</Button>
                <Button
                  onClick={async () => {
                    const prescriptionId = prescription.prescription_id; // Get the prescription ID
                    const confirmPurchase = window.confirm(
                      `Are you sure you want to purchase prescription ID: ${prescriptionId}?`,
                    );

                    if (confirmPurchase) {
                      try {
                        const response = await fetch(`/api/prescriptions/${prescriptionId}`, {
                          method: 'DELETE',
                        });

                        if (response.ok) {
                          alert('Prescription purchased successfully!');
                          // Reload the page after successful purchase
                          window.location.reload();
                        } else {
                          const errorData = await response.json();
                          console.error('Error purchasing prescription:', errorData);
                          alert('Failed to purchase prescription. Please try again.');
                        }
                      } catch (error) {
                        console.error('Error purchasing prescription:', error);
                        alert('An error occurred. Please try again.');
                      }
                    }
                  }}
                >
                  Purchase
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Card>
      ) : (
        <p className="text-center text-muted-foreground">User not found.</p>
      )}
    </div>
  );
};

export default PatientPrescriptions;
