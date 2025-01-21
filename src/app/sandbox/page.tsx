"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputDemos,
} from "./demos";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mt-4">Component Showcase</h1>
          <p className="text-muted-foreground mt-2">
            Explore and interact with all available shadcn/ui components.
          </p>
        </div>

        <Tabs defaultValue="inputs" className="space-y-4">
          <TabsList className="flex flex-wrap h-auto gap-2">
            <TabsTrigger value="inputs">Form Inputs</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="data-display">Data Display</TabsTrigger>
            <TabsTrigger value="overlay">Overlay</TabsTrigger>
          </TabsList>

        
        </Tabs>
      </div>
    </div>
  );
}