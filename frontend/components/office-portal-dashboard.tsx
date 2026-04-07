import { Users, CalendarDays, AlertCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useOfficePortalContext } from "@/context/OfficePortalContext";
import { useEffect } from "react";

const visitData = [
  { month: "Apr", visits: 42 },
  { month: "May", visits: 48 },
  { month: "Jun", visits: 52 },
  { month: "Jul", visits: 45 },
  { month: "Aug", visits: 55 },
  { month: "Sep", visits: 58 },
  { month: "Oct", visits: 68 },
];

const appointmentTypeData = [
  { name: "Regular Checkup", value: 35, color: "hsl(var(--teal))" },
  { name: "Teeth Cleaning", value: 25, color: "hsl(160, 60%, 45%)" },
  { name: "Root Canal", value: 15, color: "hsl(40, 90%, 55%)" },
  { name: "Whitening", value: 12, color: "hsl(200, 70%, 55%)" },
  { name: "Other", value: 13, color: "hsl(0, 0%, 75%)" },
];

const todaysAppointments = [
  { name: "Sarah Johnson", type: "Regular Checkup", time: "09:00 AM", status: "scheduled" },
  { name: "Sarah Johnson", type: "Regular Checkup", time: "09:00 AM", status: "scheduled" },
  { name: "Sarah Johnson", type: "Regular Checkup", time: "09:00 AM", status: "scheduled" },
];

const recentPatients = [
  { name: "Sarah Johnson", age: 32, initials: "SJ" },
  { name: "Sarah Johnson", age: 32, initials: "SJ" },
  { name: "Sarah Johnson", age: 32, initials: "SJ" },
];

const lineChartConfig: ChartConfig = {
  visits: { label: "Visits", color: "hsl(160, 60%, 45%)" },
};

const OfficePortalDashboard = () => {
  const { setOfficePortalCategory } = useOfficePortalContext()

  useEffect(() => {
    setOfficePortalCategory("Dashboard")
  }, [])
  
  return (
<div className="flex-1 min-h-screen p-4 space-y-6 sm:p-5">

  {/* Header */}
  <div>
    <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
    <p className="font-light text-sm sm:text-base">
      Welcome back! Here's what's happening today.
    </p>
  </div>

  {/* Stat Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
        <Users className="h-4 w-4 text-teal" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl sm:text-3xl font-bold">8</div>
        <p className="text-xs font-light">+2 from last week</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
        <CalendarDays className="h-4 w-4 text-teal" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl sm:text-3xl font-bold">5</div>
        <p className="text-xs font-light">5 scheduled</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Pending Appointments</CardTitle>
        <AlertCircle className="h-4 w-4 text-destructive" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl sm:text-3xl font-bold">4</div>
        <p className="text-xs font-light">Next 10 days</p>
      </CardContent>
    </Card>
  </div>

  {/* Charts */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Patient Visits Trend</CardTitle>
        <CardDescription>
          Monthly patient visits over the last 7 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={lineChartConfig} className="h-48 sm:h-55 w-full">
          <LineChart data={visitData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="hsl(var(--teal))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--teal))", r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-base">Appointments Type</CardTitle>
        <CardDescription>
          Distribution by treatment type
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="h-48 sm:h-55 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={appointmentTypeData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                dataKey="value"
                paddingAngle={2}
                label={({ name, value }) => `${name} ${value}%`}
              >
                {appointmentTypeData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

    {/* Today's Appointments */}
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Today's Appointments</CardTitle>
        <CardDescription>Wednesday, October 15, 2025</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {todaysAppointments.map((apt, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-muted text-xs">SJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{apt.name}</p>
                <p className="text-xs font-light">{apt.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm">{apt.time}</p>
              <p className="text-xs text-teal">{apt.status}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Recent Patients */}
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Recent Patients</CardTitle>
        <CardDescription>Patients seen in the last week</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPatients.map((patient, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-muted text-xs">
                  {patient.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{patient.name}</p>
                <p className="text-xs font-light">Age: {patient.age}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 cursor-pointer hover:opacity-70" />
              <Mail className="h-4 w-4 cursor-pointer hover:opacity-70" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

  </div>
</div>
  );
};

export default OfficePortalDashboard;
