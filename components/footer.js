"use client";

import { useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import facebook from "../public/img/facebook.png";
import Link from "next/link";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container className="relative mt-10 border-t border-cream-300 dark:border-gray-800">
      {/* Quick links */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6 text-sm font-medium">
        <Link
          href="/lessons"
          className="text-gray-600 hover:text-forest-700 dark:text-gray-400">
          Riding Lessons
        </Link>
        <Link
          href="/boarding"
          className="text-gray-600 hover:text-forest-700 dark:text-gray-400">
          Horse Boarding
        </Link>
        <Link
          href="/youth-camps"
          className="text-gray-600 hover:text-forest-700 dark:text-gray-400">
          Youth Camps
        </Link>
        <Link
          href="/birthday-parties"
          className="text-gray-600 hover:text-forest-700 dark:text-gray-400">
          Birthday Parties
        </Link>
        <Link
          href="/services"
          className="text-gray-600 hover:text-forest-700 dark:text-gray-400">
          Services
        </Link>
      </nav>

      <div className="mt-4 text-center text-sm">
        {" "}
        <Link
          href={"https://www.facebook.com/CarmenNHurley"}
          target="_blank"
          className="inline-flex items-center gap-2 text-forest-700 hover:underline">
          Like Us on Facebook{" "}
          <Image
            src={facebook}
            alt={"View on Our Facebook Page for more Photos"}
            width={22}
            height={22}
            className="centerImg"
          />{" "}
        </Link>
      </div>
      <div className="py-4 text-center text-sm">
        <div className="mb-2">
          © {new Date().getFullYear()}. All rights reserved.
        </div>
        <button
          onClick={handleOpenModal}
          className="mb-1 text-forest-600 underline transition-colors hover:text-forest-800">
          Cancellation Policy
        </button>
        <address className="not-italic">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Night+Sun+Stables+2601+Night+Sun+Dr+Evansville+IN+47725"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            2601 Night Sun Dr, Evansville, IN 47725
          </a>
          <br />
          <a href="tel:+18124993403" className="hover:underline">
            (812) 499-3403
          </a>
        </address>
      </div>

      {isModalOpen && (
        <>
          {/* Modal Overlay */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseModal}>
            {/* Modal Content */}
            <div
              className="relative mx-4 max-h-[80vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
              onClick={e => e.stopPropagation()}>
              <h2 className="mb-4 text-xl font-semibold dark:text-white">
                Cancellation Policy
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Advance Notice:</strong> Cancellations must
                  be made at least 24 hours prior to your scheduled
                  lesson time. Your prompt communication allows us to
                  adjust our schedule and offer the time to others. If
                  a lesson is canceled with proper notice, you may
                  reschedule at no additional cost.
                </li>
                <li>
                  <strong>Late Cancellations:</strong> Any
                  cancellations made less than 24 hours before the
                  lesson will be charged the full lesson price.
                  Exceptions may be made for emergencies on a
                  case-by-case basis.
                </li>
                <li>
                  <strong>No-Show Policy:</strong> If you do not
                  attend your scheduled lesson without prior notice,
                  you will be charged the full price of the lesson and
                  after the second no-show you will be taken off our
                  schedule permanently.
                </li>
                <li>
                  <strong>Weather-Related Cancellations:</strong> In
                  the event of severe weather conditions, lessons may
                  be canceled for safety reasons. If we cancel a
                  lesson due to weather, you will be notified, and the
                  lesson will be rescheduled.
                </li>
                <li>
                  <strong>Emergencies & Illness:</strong> We
                  understand that emergencies happen. In cases of
                  illness or other urgent situations, please notify us
                  as soon as possible. We will do our best to
                  accommodate a reschedule.
                </li>
              </ul>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="rounded bg-forest-600 px-4 py-2 text-white transition-colors hover:bg-forest-700">
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
