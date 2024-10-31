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
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Angebot = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-4">
      <Card className="w-[1050px]">
        {/* Kontaktdaten Header */}
        <CardHeader>
          <CardTitle>Kontaktdaten</CardTitle>
          <CardDescription>
            Geben Sie hier Ihre Kontaktdaten ein:
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* Vorname und Nachname nebeneinander */}
              <div className="flex space-x-4">
                <div className="flex flex-col space-y-1.5 flex-1">
                  <Label htmlFor="vorname">Vorname</Label>
                  <Input
                    type="text"
                    id="vorname"
                    placeholder="Vorname"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 flex-1">
                  <Label htmlFor="nachname">Nachname</Label>
                  <Input
                    type="text"
                    id="nachname"
                    placeholder="Nachname"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                {" "}
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
              </div>

              {/* E-Mail Feld */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-Mail</Label>
                <Input type="email" id="email" placeholder="E-Mail" required />
              </div>

              {/* Telefonnummer Feld */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="telefon">Telefonnummer</Label>
                <Input
                  type="tel"
                  id="telefon"
                  placeholder="Telefonnummer"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="outline">Abbrechen</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Möchtest du wirklich abbrechen?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Wenn du jetzt abbrichst, weden alle bisher getätigten Eingaben
                  verworfen und es wird kein Angebot angefordert.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  <Link href="home">Abbrechen</Link>
                </AlertDialogCancel>
                <AlertDialogAction>
                  Mit Bearbeitung vortfahren
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button type="submit">
            <Link href="location">Weiter</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Angebot;
