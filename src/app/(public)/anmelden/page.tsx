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

const Anmelden = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Anmelden</CardTitle>
          <CardDescription>
            Bitte melden Sie sich mit Ihren Zugangsdaten an.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* E-Mail Feld */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-Mail</Label>
                <Input type="email" id="email" placeholder="E-Mail" required />
              </div>

              {/* Passwort Feld */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Passwort</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Passwort"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="home">Abbrechen</Link>
          </Button>
          <Button type="submit">Anmelden</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Anmelden;
