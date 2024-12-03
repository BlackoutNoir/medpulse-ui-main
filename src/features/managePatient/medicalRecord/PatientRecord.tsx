'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import DataFetcher from '@/utils/DataFetcher';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PieChart, TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart as RechartsChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

async function fetchPatient(): Promise<any[]> {
  try {
    const patient = await DataFetcher.fetchPatient();
    return [patient];
  } catch (error) {
    console.error('Error fetching patient:', error);
    throw error;
  }
}

const PatientRecord = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [patientData, setPatientData] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserAndPatient = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get('/api/users/user-2');
        if (userResponse.status === 200) {
          setUser(userResponse.data);
        } else {
          console.error('Failed to fetch user data.');
        }

        // Fetch patient data
        const patientData = await fetchPatient();
        setPatientData(patientData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndPatient();
  }, []);



  const chartData = [
    { category: 'Allergies', count: 3, fill: 'hsl(var(--chart-1))' },
    { category: 'Surgeries', count: 1, fill: 'hsl(var(--chart-2))' },
    { category: 'Chronic Conditions', count: 2, fill: 'hsl(var(--chart-3))' },
    { category: 'Medications', count: 4, fill: 'hsl(var(--chart-4))' },
  ];

  const chartConfig = {
    count: {
      label: 'Count',
    },
    allergies: {
      label: 'Allergies',
      color: 'hsl(var(--chart-1))',
    },
    surgeries: {
      label: 'Surgeries',
      color: 'hsl(var(--chart-2))',
    },
    chronicConditions: {
      label: 'Chronic Conditions',
      color: 'hsl(var(--chart-3))',
    },
    medications: {
      label: 'Medications',
      color: 'hsl(var(--chart-4))',
    },
  };

  const totalCount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, [chartData]);

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
          <h2 className="text-2xl font-semibold mb-6">Comprehensive Medical Record</h2>
          <div className="space-y-4 text-left">
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Allergies</AccordionTrigger>
                  <AccordionContent>{patientData[0].medical_history.allergies}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Previous Surgeries</AccordionTrigger>
                  <AccordionContent>{patientData[0].medical_history.surgeries}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Chronic Conditions</AccordionTrigger>
                  <AccordionContent>
                    {patientData[0].medical_history.chronic_conditions}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Medications</AccordionTrigger>
                  <AccordionContent>{patientData[0].medical_history.medications}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Notes</h4>
              <p className="text-foreground">{patientData[0].medical_history.notes}</p>
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Medical History Overview
              </h4>
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                <RechartsChart>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Pie
                    data={chartData}
                    dataKey="count"
                    nameKey="category"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="text-3xl font-bold fill-foreground"
                              >
                                {totalCount}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="text-sm fill-muted-foreground"
                              >
                                Total
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </RechartsChart>
              </ChartContainer>
              <div className="mt-4 text-sm text-center text-muted-foreground">
                Overview of your medical history for the past 6 months
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <p className="text-center text-muted-foreground">User not found.</p>
      )}
    </div>
  );
};

export default PatientRecord;
