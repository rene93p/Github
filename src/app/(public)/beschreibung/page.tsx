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
                    Wenn du jetzt abbrichst, weden alle bisher getätigten
                    Eingaben verworfen und es wird kein Angebot angefordert.
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
