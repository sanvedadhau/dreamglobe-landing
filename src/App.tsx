import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import StudentVisa from "./pages/services/StudentVisa";
import WorkVisa from "./pages/services/WorkVisa";
import PermanentResidence from "./pages/services/PermanentResidence";
import TouristVisa from "./pages/services/TouristVisa";
import BusinessImmigration from "./pages/services/BusinessImmigration";
import DocumentServices from "./pages/services/DocumentServices";

// Destination Pages
import Canada from "./pages/destinations/Canada";
import Australia from "./pages/destinations/Australia";
import Germany from "./pages/destinations/Germany";
import UnitedKingdom from "./pages/destinations/UnitedKingdom";
import NewZealand from "./pages/destinations/NewZealand";
import UnitedStates from "./pages/destinations/UnitedStates";

// Other Pages
import ExplorePrograms from "./pages/ExplorePrograms";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/student-visa" element={<StudentVisa />} />
          <Route path="/services/work-visa" element={<WorkVisa />} />
          <Route path="/services/permanent-residence" element={<PermanentResidence />} />
          <Route path="/services/tourist-visa" element={<TouristVisa />} />
          <Route path="/services/business-immigration" element={<BusinessImmigration />} />
          <Route path="/services/document-services" element={<DocumentServices />} />
          
          {/* Destination Routes */}
          <Route path="/destinations/canada" element={<Canada />} />
          <Route path="/destinations/australia" element={<Australia />} />
          <Route path="/destinations/germany" element={<Germany />} />
          <Route path="/destinations/united-kingdom" element={<UnitedKingdom />} />
          <Route path="/destinations/new-zealand" element={<NewZealand />} />
          <Route path="/destinations/united-states" element={<UnitedStates />} />
          
          {/* Other Routes */}
          <Route path="/explore-programs" element={<ExplorePrograms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
