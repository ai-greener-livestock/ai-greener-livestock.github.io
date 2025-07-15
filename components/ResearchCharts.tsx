"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Diet Impact Data
const dietImpactData = [
  {
    diet: "High Forage",
    composition: "80% grass, 20% grain",
    methane_ppm: 482.45,
    total_gas_ml: 374.10,
    ph: 6.80,
    color: "#ef4444"
  },
  {
    diet: "Low Forage", 
    composition: "20% grass, 80% grain",
    methane_ppm: 293.72,
    total_gas_ml: 384.17,
    ph: 6.31,
    color: "#f59e0b"
  },
  {
    diet: "Control",
    composition: "50% grass, 50% grain", 
    methane_ppm: 167.22,
    total_gas_ml: 382.82,
    ph: 6.64,
    color: "#10b981"
  },
  {
    diet: "Seaweed",
    composition: "Control + bromoform",
    methane_ppm: 1.41,
    total_gas_ml: 327.98,
    ph: 6.57,
    color: "#3b82f6"
  }
]

// AI Model Performance Data
const modelPerformanceData = [
  { model: "Gasformer", mIoU: 88.56, parameters: 3.65, fps: 97.45, gflops: 9.92 },
  { model: "Segformer B0", mIoU: 88.41, parameters: 3.7, fps: 91.2, gflops: 10.1 },
  { model: "DeepLabv3+", mIoU: 88.18, parameters: 41.0, fps: 28.3, gflops: 176 },
  { model: "SegNeXt-T", mIoU: 88.0, parameters: 4.2, fps: 85.1, gflops: 15.2 },
  { model: "FCN", mIoU: 86.41, parameters: 47.1, fps: 12.5, gflops: 198 }
]

// Dataset Distribution Data
const datasetData = [
  { name: "Controlled Methane Release", images: 9237, description: "Known flow rates" },
  { name: "Beef Cattle Methane Emissions", images: 11694, description: "Live cattle, 3 diets" },
  { name: "Controlled Diet", images: 4885, description: "Different dietary treatments" },
  { name: "Dairy Cow Rumen", images: 340, description: "Real cow samples" }
]

// Interactive Diet Impact Chart
export function DietImpactChart() {
  const [selectedMetric, setSelectedMetric] = useState<'methane_ppm' | 'total_gas_ml' | 'ph'>('methane_ppm')
  
  const metricLabels = {
    methane_ppm: "Methane (ppm)",
    total_gas_ml: "Total Gas (mL)", 
    ph: "pH Level"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diet Impact on Emission Characteristics</CardTitle>
        <CardDescription>
          Interactive comparison of how different cow diets affect methane production and rumen chemistry
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {Object.entries(metricLabels).map(([key, label]) => (
            <Button
              key={key}
              size="sm"
              variant={selectedMetric === key ? "default" : "outline"}
              onClick={() => setSelectedMetric(key as typeof selectedMetric)}
            >
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dietImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="diet" />
              <YAxis />
              <Tooltip 
                formatter={(value: any) => [value, metricLabels[selectedMetric]]}
                labelFormatter={(label: string) => `Diet: ${label}`}
                content={({ active, payload, label }: any) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-white p-3 border rounded shadow">
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">{data.composition}</p>
                        <p className="text-blue-600">{metricLabels[selectedMetric]}: {payload[0].value}</p>
                        {selectedMetric === 'methane_ppm' && (
                          <div className="mt-2 text-xs">
                            <p>pH: {data.ph}</p>
                            <p>Total Gas: {data.total_gas_ml} mL</p>
                          </div>
                        )}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey={selectedMetric} fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {selectedMetric === 'methane_ppm' && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Key Finding</h4>
            <p className="text-sm text-blue-700">
              Seaweed supplement reduced methane emissions by <strong>99.2%</strong> compared to high forage diet 
              (482.45 ppm → 1.41 ppm), representing a dramatic breakthrough in emission reduction.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// AI Model Performance Comparison
export function ModelPerformanceChart() {
  const [selectedMetric, setSelectedMetric] = useState<'mIoU' | 'fps' | 'parameters'>('mIoU')
  
  const metricLabels = {
    mIoU: "Accuracy (mIoU %)",
    fps: "Speed (FPS)",
    parameters: "Model Size (M params)"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Model Performance Comparison</CardTitle>
        <CardDescription>
          Gasformer vs. state-of-the-art computer vision models for methane detection
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {Object.entries(metricLabels).map(([key, label]) => (
            <Button
              key={key}
              size="sm"
              variant={selectedMetric === key ? "default" : "outline"}
              onClick={() => setSelectedMetric(key as typeof selectedMetric)}
            >
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={modelPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip 
                content={({ active, payload, label }: any) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-white p-3 border rounded shadow">
                        <p className="font-medium">{label}</p>
                        <div className="mt-2 space-y-1 text-xs">
                          <p>Accuracy: {data.mIoU}%</p>
                          <p>Speed: {data.fps} FPS</p>
                          <p>Size: {data.parameters}M params</p>
                          <p>Efficiency: {data.gflops} GFLOPs</p>
                        </div>
                        {label === "Gasformer" && (
                          <Badge className="mt-2 bg-green-100 text-green-800">Best Overall</Badge>
                        )}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar 
                dataKey={selectedMetric} 
                fill="#3b82f6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-800 mb-2">Gasformer Advantages</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-green-700">
            <div>
              <strong>Highest Accuracy:</strong> 88.56% mIoU outperforming all baseline models
            </div>
            <div>
              <strong>Real-time Speed:</strong> 97+ FPS enabling live monitoring applications
            </div>
            <div>
              <strong>Compact Size:</strong> Only 3.65M parameters, 13x smaller than FCN
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Dataset Overview Pie Chart
export function DatasetOverview() {
  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b']
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Dataset Overview</CardTitle>
        <CardDescription>
          26,156 total labeled images across four specialized datasets
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={datasetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, images, percent }: any) => `${name}: ${images} (${percent ? (percent * 100).toFixed(0) : 0}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="images"
              >
                {datasetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: any) => [`${value} images`, "Images"]}
                labelFormatter={(label: string) => `Dataset: ${label}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {datasetData.map((dataset, index) => (
            <div key={dataset.name} className="text-center p-3 bg-gray-50 rounded-lg">
              <div 
                className="w-4 h-4 rounded-full mx-auto mb-2"
                style={{ backgroundColor: COLORS[index] }}
              />
              <h4 className="font-medium text-sm">{dataset.name}</h4>
              <p className="text-xs text-gray-600">{dataset.description}</p>
              <p className="text-lg font-bold text-gray-800">{dataset.images}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Emission Reduction Timeline
export function EmissionReductionTimeline() {
  const timelineData = [
    { year: 2020, baseline: 100, description: "Traditional monitoring methods" },
    { year: 2021, baseline: 95, description: "Initial AI research begins" },
    { year: 2022, baseline: 85, description: "USDA grant funding secured" },
    { year: 2023, baseline: 60, description: "Gasformer development" },
    { year: 2024, baseline: 25, description: "Seaweed supplement testing" },
    { year: 2025, baseline: 1, description: "99.2% reduction achieved" }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Progress Timeline</CardTitle>
        <CardDescription>
          Journey from traditional monitoring to breakthrough emission reduction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Relative Emission Level', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value: any) => [`${value}%`, "Emission Level"]}
                labelFormatter={(label: string) => `Year: ${label}`}
                content={({ active, payload, label }: any) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-white p-3 border rounded shadow max-w-xs">
                        <p className="font-medium">Year {label}</p>
                        <p className="text-blue-600">Emission Level: {payload[0].value}%</p>
                        <p className="text-xs text-gray-600 mt-1">{data.description}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line 
                type="monotone" 
                dataKey="baseline" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 