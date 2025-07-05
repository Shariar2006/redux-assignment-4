import BorrowSummaryTable from '@/components/modules/borrow/BorrowSummaryTable'
import React from 'react'

export default function BorrowSummary() {
  return (
    <div className='max-w-3xl mx-auto py-10'>
      <div className="mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Borrow Summary
        </h2>
        <p className="text-sm text-gray-500">
          Track borrowed books, return status, and availability at a glance.
        </p>
      </div>
      <BorrowSummaryTable />
    </div>
  )
}
