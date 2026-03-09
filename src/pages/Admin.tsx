import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, DollarSign, MessageSquare, Users, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Bookings Today", value: "24", icon: CalendarDays, change: "+12%" },
  { label: "Boutique Revenue (THB)", value: "฿187,500", icon: DollarSign, change: "+8.3%" },
  { label: "LINE Conversion Rate", value: "34.2%", icon: MessageSquare, change: "+2.1%" },
  { label: "Repeat Customers", value: "68%", icon: Users, change: "+5.4%" },
];

const reservations = [
  { id: 1, guest: "คุณพลอย กิตติวรรณ", time: "12:00", course: "Lunch", pax: 2, deposit: "paid", amount: 4000 },
  { id: 2, guest: "Mr. James Chen", time: "12:30", course: "Lunch", pax: 4, deposit: "paid", amount: 4000 },
  { id: 3, guest: "คุณณัฐ สิริวัฒน์", time: "18:00", course: "Signature", pax: 2, deposit: "paid", amount: 6500 },
  { id: 4, guest: "Ms. Jae-won Kim", time: "18:30", course: "Premium", pax: 2, deposit: "pending", amount: 9000 },
  { id: 5, guest: "คุณสมชาย วัฒนกุล", time: "19:00", course: "Signature", pax: 6, deposit: "paid", amount: 6500 },
  { id: 6, guest: "Mr. Takeshi Yamamoto", time: "19:30", course: "Premium", pax: 2, deposit: "paid", amount: 9000 },
];

const leads = [
  { name: "คุณแพร ลิ้มสกุล", source: "LINE OA", action: "Clicked Reserve", points: 320, status: "Hot Lead" },
  { name: "Mark Thompson", source: "Instagram", action: "Viewed Menu", points: 150, status: "Warm" },
  { name: "คุณบีม ประพันธ์", source: "LINE OA", action: "Purchased Kit", points: 580, status: "VIP" },
  { name: "Yuna Park", source: "LINE OA", action: "Inquiry", points: 90, status: "New" },
  { name: "คุณนิด้า จันทร์เพ็ญ", source: "Google", action: "Reserved", points: 450, status: "VIP" },
];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <h1 className="font-serif text-lg text-primary">IZUMI Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-sans">วันนี้: 9 มี.ค. 2026</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-hinoki to-gold flex items-center justify-center text-primary-foreground text-xs font-bold">A</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-5 h-5 text-accent" />
                <span className="text-xs font-sans text-accent">{stat.change}</span>
              </div>
              <p className="text-2xl font-serif text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-sans mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reservation Table */}
        <div className="bg-card border border-border rounded-lg">
          <div className="p-5 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="font-serif text-lg text-primary">Reservations</h2>
              <p className="text-xs text-muted-foreground font-sans">Deposit: ฿2,000 required per booking</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search guests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-muted border-0 rounded-md pl-9 pr-3 py-2 text-sm font-sans text-foreground placeholder:text-muted-foreground w-48 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <Button variant="gold" size="sm">+ Add Booking</Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Guest</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Time</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Course</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Pax</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Deposit</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Price/person</th>
                </tr>
              </thead>
              <tbody>
                {reservations
                  .filter((r) => r.guest.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((r) => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4 text-sm font-sans text-foreground">{r.guest}</td>
                      <td className="px-5 py-4 text-sm font-sans text-foreground">{r.time}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-sans px-2.5 py-1 rounded-full ${
                          r.course === "Premium" ? "bg-accent/20 text-accent" : r.course === "Signature" ? "bg-hinoki/20 text-hinoki" : "bg-muted text-muted-foreground"
                        }`}>
                          {r.course}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-sans text-foreground">{r.pax}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-sans font-semibold ${r.deposit === "paid" ? "text-green-400" : "text-yellow-400"}`}>
                          {r.deposit === "paid" ? "✓ ฿2,000 Paid" : "⏳ Pending"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-sans text-primary">฿{r.amount.toLocaleString()}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-muted-foreground font-sans text-center">
            Integration placeholders: Chope API • Hungry Hub • TableCheck
          </div>
        </div>

        {/* CRM / Leads */}
        <div className="bg-card border border-border rounded-lg">
          <div className="p-5 border-b border-border">
            <h2 className="font-serif text-lg text-primary">CRM / Lead Management</h2>
            <p className="text-xs text-muted-foreground font-sans">LINE OA click tracking & rewards points</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Name</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Source</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Last Action</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Points</th>
                  <th className="text-left text-xs font-sans font-semibold text-muted-foreground px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4 text-sm font-sans text-foreground">{lead.name}</td>
                    <td className="px-5 py-4 text-sm font-sans text-muted-foreground">{lead.source}</td>
                    <td className="px-5 py-4 text-sm font-sans text-muted-foreground">{lead.action}</td>
                    <td className="px-5 py-4 text-sm font-sans text-primary">{lead.points}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-sans px-2.5 py-1 rounded-full font-semibold ${
                        lead.status === "VIP" ? "bg-accent/20 text-accent" :
                        lead.status === "Hot Lead" ? "bg-red-500/20 text-red-400" :
                        lead.status === "Warm" ? "bg-hinoki/20 text-hinoki" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
