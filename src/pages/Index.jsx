import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paw, Heart, Award, DogBowl } from "lucide-react";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 flex items-center justify-center">
              <Paw className="mr-4 h-12 w-12" /> Paw-some Pals
            </h1>
            <p className="text-xl">Discover the wonderful world of our canine companions</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Interactive Like Button */}
        <div className="text-center mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setLikeCount(prev => prev + 1)}
            className="group transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <Heart className="mr-2 h-6 w-6 text-red-500 group-hover:animate-ping" /> 
            Show Some Love! ({likeCount})
          </Button>
        </div>

        {/* What Makes Dogs Special Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Award className="mr-2 h-8 w-8 text-yellow-500" /> 
              What Makes Dogs Special?
            </CardTitle>
            <CardDescription>Characteristics that make dogs unique companions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Loyal and affectionate nature",
                "Ability to understand human emotions",
                "Diverse breeds with unique traits",
                "Trainable for various tasks and roles",
                "Provide companionship and reduce stress",
                "Enhance physical and mental well-being"
              ].map((trait, index) => (
                <li key={index} className="flex items-center">
                  <DogBowl className="mr-2 h-5 w-5 text-blue-500" />
                  {trait}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Popular Dog Breeds Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Popular Dog Breeds</CardTitle>
            <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="large" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="large">Large Breeds</TabsTrigger>
                <TabsTrigger value="small">Small Breeds</TabsTrigger>
              </TabsList>
              <TabsContent value="large">
                <ul className="grid grid-cols-2 gap-2">
                  {["Labrador Retriever", "German Shepherd", "Golden Retriever", "Siberian Husky"].map((breed, index) => (
                    <li key={index} className="flex items-center">
                      <Paw className="mr-2 h-4 w-4 text-indigo-500" />
                      {breed}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="small">
                <ul className="grid grid-cols-2 gap-2">
                  {["Chihuahua", "Pomeranian", "French Bulldog", "Beagle"].map((breed, index) => (
                    <li key={index} className="flex items-center">
                      <Paw className="mr-2 h-4 w-4 text-pink-500" />
                      {breed}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
