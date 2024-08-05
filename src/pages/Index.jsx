import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center flex items-center justify-center">
          <Paw className="mr-2" /> All About Dogs
        </h1>
        
        <img 
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
          alt="Cute dog" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Makes Dogs Special?</CardTitle>
            <CardDescription>Characteristics that make dogs unique companions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loyal and affectionate nature</li>
              <li>Ability to understand human emotions</li>
              <li>Diverse breeds with unique traits</li>
              <li>Trainable for various tasks and roles</li>
              <li>Provide companionship and reduce stress</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
            <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Large Breeds</h3>
                <ul className="list-disc pl-6">
                  <li>Labrador Retriever</li>
                  <li>German Shepherd</li>
                  <li>Golden Retriever</li>
                  <li>Siberian Husky</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Small Breeds</h3>
                <ul className="list-disc pl-6">
                  <li>Chihuahua</li>
                  <li>Pomeranian</li>
                  <li>French Bulldog</li>
                  <li>Beagle</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
