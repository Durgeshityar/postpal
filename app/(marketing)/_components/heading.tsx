'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your blogs, Newsletter & plans. Unified. Welcome to
        <span className="underline"> Postpal</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Postpal is the connected workspace where better, faster work happens
      </h3>
      <Button variant={'outline'}>
        Enter Postpal
        <ArrowRight className="size-4 ml-2" />
      </Button>
    </div>
  )
}
