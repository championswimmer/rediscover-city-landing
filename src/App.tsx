import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeetFriendsMiddle from "./pages/MeetFriendsMiddle";
import FindMeetingSpot from "./pages/FindMeetingSpot";
import GroupMeetingCoordinate from "./pages/GroupMeetingCoordinate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meet-friends-middle" element={<MeetFriendsMiddle />} />
          <Route path="/find-meeting-spot" element={<FindMeetingSpot />} />
          <Route path="/group-meeting-coordinate" element={<GroupMeetingCoordinate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
