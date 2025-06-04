'use client'

// ==============================
// IMPORTAÇÕES
// ==============================

// Importações do Next.js e componentes externos
import Link from "next/link";
import * as React from "react"
import { Moon, User, Settings, LogOut, Sun } from "lucide-react";
import { useTheme } from "next-themes"

// Importações de componentes da UI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

// ==============================
// COMPONENTE NAVBAR
// ==============================

function Navbar() {
    const { setTheme } = useTheme()
    const { toggleSidebar } = useSidebar()

    return (
        <nav className="p-4 flex items-center justify-between">

            {/* ===== INÍCIO: Botão de abertura do Sidebar ===== */}
            <SidebarTrigger />
            {/* ===== FIM: Botão de abertura do Sidebar ===== */}

            {/* ===== INÍCIO: Grupo de ações do lado direito ===== */}
            <div className="flex intems-center gap-4">

                {/* ===== Link para Dashboard ===== */}
                <Link href='/'>Dashboard</Link>
                {/* ===== Fim Link para Dashboard ===== */}

                {/* ===== INÍCIO: Botão para alternar tema (claro/escuro) ===== */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* ===== FIM: Botão para alternar tema ===== */}

                {/* ===== INÍCIO: Menu de avatar do usuário ===== */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="avatar3.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Profile
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Settings
                        </DropdownMenuItem>

                        <DropdownMenuItem variant="destructive">
                            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* ===== FIM: Menu de avatar do usuário ===== */}

            </div>
            {/* ===== FIM: Grupo de ações do lado direito ===== */}

        </nav>
    );
}

// ==============================
// EXPORTAÇÃO DO COMPONENTE
// ==============================
export default Navbar;
