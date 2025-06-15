import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FamilyHub from "./pages/FamilyHub";
import FamilyCalendar from "./pages/tools/FamilyCalendar";
import BudgetCalculator from "./pages/tools/BudgetCalculator";
import MealPlanner from "./pages/tools/MealPlanner";
import HealthTracker from "./pages/tools/HealthTracker";
import TimeManager from "./pages/tools/TimeManager";
import HomeworkPlanner from "./pages/tools/HomeworkPlanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FamilyHub />} />
          <Route path="/tools/calendar" element={<FamilyCalendar />} />
          <Route path="/tools/budget" element={<BudgetCalculator />} />
          <Route path="/tools/meals" element={<MealPlanner />} />
          <Route path="/tools/health" element={<HealthTracker />} />
          <Route path="/tools/time" element={<TimeManager />} />
          <Route path="/tools/homework" element={<HomeworkPlanner />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
