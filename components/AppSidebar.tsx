// -------------------- IMPORTS --------------------

// Next.js imports
import Link from "next/link";
import Image from "next/image";

// Componentes UI - Collapsible
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Ícones (Lucide)
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  ChevronUp,
  User2,
  Plus,
  Projector,
  ChevronDown,
} from "lucide-react";

// Componentes UI - Sidebar
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

// Componentes UI - Dropdown
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// -------------------- FIM IMPORTS --------------------



// -------------------- DADOS DO MENU --------------------
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
// -------------------- FIM DADOS DO MENU --------------------



function AppSidebar() {
  return (
    <Sidebar collapsible="icon" side="left">

      {/* -------------------- HEADER DO SIDEBAR -------------------- */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/sun.png" alt="logo" width={20} height={20} />
                <span>Leo Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* -------------------- FIM HEADER DO SIDEBAR -------------------- */}



      {/* -------------------- LINHA SEPARADORA -------------------- */}
      <SidebarSeparator />
      {/* -------------------- FIM LINHA SEPARADORA -------------------- */}



      {/* -------------------- CONTEÚDO DO SIDEBAR -------------------- */}
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroup />

        {/* ---------- MENU PRINCIPAL ---------- */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.title === "Inbox" && (
                <SidebarMenuBadge>23</SidebarMenuBadge>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        {/* ---------- FIM MENU PRINCIPAL ---------- */}



        {/* ---------- GRUPO DE PROJETOS ---------- */}
        <SidebarGroupContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm">Projects</SidebarGroupLabel>

            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>

            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/#">
                      <Projector />
                      See All Projects
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/#">
                      <Plus />
                      Add Project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        {/* ---------- FIM GRUPO DE PROJETOS ---------- */}



          {/* ---------- GRUPO COLAPSÁVEL ---------- */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel className="text-sm" asChild>
                <CollapsibleTrigger>
                  Collapsable Group
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/#">
                          <Projector />
                          See All Projects
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/#">
                          <Plus />
                          Add Project
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          {/* ---------- FIM GRUPO COLAPSÁVEL ---------- */}



          {/* ---------- GRUPO NESTED ---------- */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm">
              Nested Items
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/#">
                      <Projector />
                      See All Projects
                    </Link>
                  </SidebarMenuButton>

                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/#">
                          <Plus />
                          Add Project
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/#">
                          <Plus />
                          Add Category
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* ---------- FIM GRUPO NESTED ---------- */}

        </SidebarGroupContent>
      </SidebarContent>
      {/* -------------------- FIM CONTEÚDO DO SIDEBAR -------------------- */}



      {/* -------------------- FOOTER DO SIDEBAR -------------------- */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Leonardo G. <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {/* -------------------- FIM FOOTER DO SIDEBAR -------------------- */}

    </Sidebar>
  );
}

export default AppSidebar;
