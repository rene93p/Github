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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import NumberInput from "@/components/ui/number";
import { CalendarForm } from "@/components/ui/calendarInput";

const Angebot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-4">
      <Card className="w-[1050px]">
        {/* Location Header */}
        <CardHeader>
          <CardTitle>Location</CardTitle>
          <CardDescription>
            Geben Sie hier Ihre Anschrift der Location ein:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            {/* Anschrift */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="anschrift">Anschrift</Label>
              <Input
                type="text"
                id="anschrift"
                placeholder="Anschrift"
                required
              />
            </div>
            {/* Ort und Postleitzahl */}
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="ort">Ort</Label>
                <Input type="text" id="ort" placeholder="Ort" required />
              </div>
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="postleitzahl">Postleitzahl</Label>
                <Input
                  type="text"
                  id="postleitzahl"
                  placeholder="Postleitzahl"
                  required
                />
              </div>
            </div>

            {/* Fläche, Personen und Datum */}
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="flaeche">Fläche (m²)</Label>
                <NumberInput />
              </div>
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="personen">Personen</Label>
                <NumberInput />
              </div>
              <div className="flex flex-col space-y-1.5 flex-1">
                <Label htmlFor="datum">Datum</Label>
                <CalendarForm></CalendarForm>
              </div>
            </div>

            {/* Auswahloptionen mit Checkboxen in drei Spalten */}
            <div className="mt-4">
              <Label className="text-base">Zusätzliche Optionen:</Label>
              <div className="grid grid-cols-3 gap-x-8 gap-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="indoor" />
                  <Label htmlFor="indoor">Indoor</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="buehne" />
                  <Label htmlFor="buehne">Bühne vorhanden</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="licht" />
                  <Label htmlFor="licht">Lichtanlage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outdoor" />
                  <Label htmlFor="outdoor">Outdoor</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="strom" />
                  <Label htmlFor="strom">Stromversorgung ist vorhanden</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vermietung" />
                  <Label htmlFor="vermietung">Vermietung</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="space-x-1.5">
            <Button variant="outline">
              <Link href="home">Abbrechen</Link>
            </Button>
            <Button variant="outline">
              <Link href="angebot">Zurück</Link>
            </Button>
          </div>
          <Button type="submit">
            <Link href="beschreibung">Weiter</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Angebot;
