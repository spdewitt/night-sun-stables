"use client";

import { useState } from "react";
import Container from "@/components/container";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container className="relative mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="py-4 text-center text-sm">
        <div className="mb-2">
          © {new Date().getFullYear()}. All rights reserved.
        </div>
        <button
          onClick={handleOpenModal}
          className="text-blue-600 underline transition-colors hover:text-blue-800">
          Cancellation Policy
        </button>
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
                  className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
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
