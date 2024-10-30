import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

const Angebot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-4">
      <Card className="w-[1050px]">
        {/* Location Header */}
        <CardHeader>
          <CardTitle>Message</CardTitle>
          <CardDescription>
            Hinterlass mir gene noch ein paar Details:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            {/* Textfeld */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="anschrift"></Label>
              <Textarea></Textarea>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="space-x-1.5">
            <Button variant="outline">
              <Link href="home">Abbrechen</Link>
            </Button>
            <Button variant="outline">
              <Link href="location">Zurück</Link>
            </Button>
          </div>
          <Button type="submit">Senden</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Angebot;
