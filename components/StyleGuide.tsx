import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {};

export default function StyleGuide({}: Props) {
  return (
    <div className="container flex flex-col gap-y-4">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut
        aperiam nisi. Corrupti nam voluptas dicta. Accusantium deserunt corporis
        fuga reiciendis iste quibusdam voluptate quia adipisci temporibus earum,
        sed non.
      </p>
      <div className="w-full flex flex-col bg-primary h-[200px] p-10">
        <Link href="/">Link</Link>

        <Label htmlFor="test">Test</Label>
        <Input type="test" name="test" placeholder="Test" />
      </div>
      <Button variant="primary" size="sm">
        Button
      </Button>
      <Button variant="secondary" size="sm">
        Button
      </Button>
      <Button variant="danger" size="lg">
        Button
      </Button>
      <Button variant="success" size="default">
        Button
      </Button>
    </div>
  );
}
