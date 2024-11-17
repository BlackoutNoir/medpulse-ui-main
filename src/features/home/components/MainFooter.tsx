'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Stethoscope,
  Newspaper,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import FooterBottom from './FooterBottom';

export default function MainFooter() {
  const mainFooterItems = [
    {
      title: 'About MedPulse Clinic',
      href: '#',
      items: [
        { title: 'About this Site', href: '#' },
        { title: 'Contact us', href: '#' },
        { title: 'Locations', href: '#' },
        { title: 'Health Information Policy', href: '#' },
        { title: 'Medicare Accountable Care Organization (ACO)', href: '#' },
        { title: 'Media Requests', href: '#' },
        { title: 'News Network', href: '#' },
        { title: 'Price Transparency', href: '#' },
      ],
    },
    {
      title: 'Medical Professionals',
      href: '#',
      items: [
        { title: 'AskMedPulseExpert', href: '#' },
        { title: 'Clinical Trials', href: '#' },
        { title: 'MedPulse Clinic Alumni Association', href: '#' },
        { title: 'Refer a Patient', href: '#' },
      ],
    },
    {
      title: 'Businesses',
      href: '#',
      items: [
        { title: 'Executive Health Program', href: '#' },
        { title: 'International Business Collaborations', href: '#' },
        { title: 'Facilities & Real Estate', href: '#' },
        { title: 'Supplier Information', href: '#' },
      ],
    },
    {
      title: 'Students',
      href: '#',
      items: [
        { title: 'Admission Requirements', href: '#' },
        { title: 'Degree Programs', href: '#' },
        { title: 'Student & Faculty Portal', href: '#' },
      ],
    },
    {
      title: 'Researchers',
      href: '#',
      items: [
        { title: 'Research Faculty', href: '#' },
        { title: 'Laboratories', href: '#' },
      ],
    },
    {
      title: 'International Patients',
      href: '#',
      items: [
        { title: 'Appointments', href: '#' },
        { title: 'Financial Services', href: '#' },
        { title: 'International Locations & Offices', href: '#' },
      ],
    },
    {
      title: 'Charitable Care & Financial Assistance',
      href: '#',
      items: [
        { title: 'Community Health Needs Assessment', href: '#' },
        { title: 'Financial Assistance Documents - Arizona', href: '#' },
        { title: 'Financial Assistance Documents - Florida', href: '#' },
        { title: 'Financial Assistance Documents - Minnesota', href: '#' },
      ],
    },
  ];

  const quickActions = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Find a doctor',
      href: '#',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Explore careers',
      href: '#',
    },
    {
      icon: <Newspaper className="h-6 w-6" />,
      title: 'Sign up for free e-newsletters',
      href: '#',
    },
  ];

  return (
    <>
      {/* Top Empty Div */}
      <div className="h-24 bg-slate-900"></div>

      {/* Footer Content */}
      <footer className="bg-blue-950 text-white py-10 px-6 lg:px-20">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-10">
          {quickActions.map((action, index) => (
            <Link href={action.href} key={index} passHref>
              <Card className="bg-blue-950 text-white border-2 border-blue-900 cursor-pointer hover:border-blue-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  {action.icon}
                  <CardTitle className="flex-grow pb-2">{action.title}</CardTitle>
                  <ChevronRight className="h-5 w-5" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFooterItems.map((section, index) => (
            <div key={index}>
              <Link href={section.href} className="flex items-center mb-3 group">
                <h3 className="text-lg font-semibold hover:underline">{section.title}</h3>
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="text-sm hover:underline hover:text-blue-200">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
<div className="border-t border-blue-900 mt-10 pt-6 flex flex-col gap-4 lg:gap-0 lg:justify-center lg:items-center">
  <h3 className="text-lg font-semibold lg:text-center lg:mb-4">
    Follow MedPulse Clinic
  </h3>
  <div className="flex gap-4 justify-start lg:justify-center">
    <Link
      href="#"
      className="flex items-center justify-center p-2 h-10 w-10 rounded-full border-2 border-blue-900 hover:border-blue-200"
    >
      <Facebook className="h-6 w-6 text-white" />
    </Link>
    <Link
      href="#"
      className="flex items-center justify-center p-2 h-10 w-10 rounded-full border-2 border-blue-900 hover:border-blue-200"
    >
      <Instagram className="h-6 w-6 text-white" />
    </Link>
    <Link
      href="#"
      className="flex items-center justify-center p-2 h-10 w-10 rounded-full border-2 border-blue-900 hover:border-blue-200"
    >
      <Linkedin className="h-6 w-6 text-white" />
    </Link>
    <Link
      href="#"
      className="flex items-center justify-center p-2 h-10 w-10 rounded-full border-2 border-blue-900 hover:border-blue-200"
    >
      <Youtube className="h-6 w-6 text-white" />
    </Link>
  </div>
</div>

      </footer>
      <FooterBottom />
    </>
  );
}
