import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CoursesPage from "@/pages/CoursesPage";
import StitchLibraryPage from "@/pages/StitchLibraryPage";
import PatternsPage from "@/pages/PatternsPage";
import NeedlesPage from "@/pages/NeedlesPage";
import ToolsPage from "@/pages/ToolsPage";
import CommunityPage from "@/pages/CommunityPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CoursesPage />} />
            <Route path="/courses/:courseId/:lessonId" element={<CoursesPage />} />
            <Route path="/stitches" element={<StitchLibraryPage />} />
            <Route path="/stitches/:stitchId" element={<StitchLibraryPage />} />
            <Route path="/patterns" element={<PatternsPage />} />
            <Route path="/patterns/:patternId" element={<PatternsPage />} />
            <Route path="/needles" element={<NeedlesPage />} />
            <Route path="/needles/:needleId" element={<NeedlesPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            {/* <Route path="/community" element={<CommunityPage />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
