'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import DataFetcher from '@/utils/DataFetcher';
import { jsPDF } from 'jspdf'; // Import jsPDF
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

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

const PatientResults = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [patientData, setPatientData] = useState<any[]>([]);
  const [patientResults, setPatientResults] = useState<any[]>([]);
  const [selectedResult, setSelectedResult] = useState<any>(null); // Track the selected result

  useEffect(() => {
    const fetchUserAndPatient = async () => {
      try {
        const userResponse = await axios.get('/api/users/user-2');
        if (userResponse.status === 200) {
          setUser(userResponse.data);
        } else {
          console.error('Failed to fetch user data.');
        }

        const labResults = await fetchLabResults();
        setPatientResults(labResults);
        const patient = await fetchPatient();
        setPatientData(patient);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndPatient();
  }, []);

  const data = [
    { goal: 400 },
    { goal: 300 },
    { goal: 200 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 239 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 349 },
  ];

  const downloadPdf = () => {
    if (!selectedResult) {
      return; // Return if no result is selected
    }

    const doc = new jsPDF();

    // Set up content for the PDF
    doc.setFontSize(18);
    doc.text('Lab Results Overview', 20, 20);

    // Add selected result data to the PDF
    doc.setFontSize(12);
    doc.text(`${selectedResult.test_name}`, 20, 30);
    doc.text(`ID: ${selectedResult.lab_test_id}`, 20, 40);
    doc.text(`Date Requested: ${selectedResult.date_requested}`, 20, 50);
    doc.text(`Date Completed: ${selectedResult.date_completed}`, 20, 60);
    doc.text(`Results: ${selectedResult.results}`, 20, 70);
    doc.addPage();

    // Add the chart or other data if necessary
    doc.text('Chart or other data can go here...', 20, 80);

    // Save the PDF
    doc.save('selected_lab_result.pdf');
  };

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
          <h2 className="text-2xl font-semibold mb-6">Lab Results Overview</h2>
          <div className="space-y-4 text-left">
            {patientResults.map((result, index) => (
              <div key={index}>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedResult(result)}>
                      {result.test_name}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{result.test_name}</DrawerTitle>
                        <DrawerDescription>
                          ID: {result.lab_test_id}
                          <br />
                          Date Requested: {result.date_requested}
                          <br />
                          Date Completed: {result.date_completed}
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="flex-1 text-center">
                            <div className="text-7xl font-bold tracking-tighter">
                              {result.results}
                            </div>
                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                              Consult A Doctor for further inquiries
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 h-[120px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                              <Bar
                                dataKey="goal"
                                style={{
                                  fill: 'hsl(var(--foreground))',
                                  opacity: 0.9,
                                }}
                              />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button onClick={downloadPdf}>Download</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <p className="text-center text-muted-foreground">User not found.</p>
      )}
    </div>
  );
};

export default PatientResults;
