"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvator"
import { Session } from "next-auth"
import { Button } from "./ui/button"
import { signIn, signOut } from "next-auth/react";
import { User } from "lucide-react";
import Link from "next/link";

  
function UserButton({session}: { session: Session | null}) {

    console.log(session);

    if (!session) return (
        <Button variant={'outline'} onClick={() => signIn()} >
         Sign In
        </Button>
    )
  return session && ( <DropdownMenu>
  <DropdownMenuTrigger>
    <UserAvatar name={session.user?.name}
     image={session.user?.image} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
)

}

export default UserButton