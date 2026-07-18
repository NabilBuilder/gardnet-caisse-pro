import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Building2,
  Users,
  Tags,
  Contact,
  DatabaseBackup,
  RefreshCw,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/_app/parametres")({
  component: ParametresPage,
});

function ParametresPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Paramètres"
        description="Configurez votre application"
      />

      <Tabs defaultValue="societe" className="w-full">
        <TabsList className="flex w-full flex-wrap h-auto justify-start gap-1 bg-muted p-1">
          <TabsTrigger value="societe" className="gap-2">
            <Building2 className="h-4 w-4" /> Société
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" /> Utilisateurs
          </TabsTrigger>
          <TabsTrigger value="cats" className="gap-2">
            <Tags className="h-4 w-4" /> Catégories
          </TabsTrigger>
          <TabsTrigger value="contacts" className="gap-2">
            <Contact className="h-4 w-4" /> Contacts
          </TabsTrigger>
          <TabsTrigger value="backup" className="gap-2">
            <DatabaseBackup className="h-4 w-4" /> Sauvegarde
          </TabsTrigger>
          <TabsTrigger value="sync" className="gap-2">
            <RefreshCw className="h-4 w-4" /> Synchronisation
          </TabsTrigger>
          <TabsTrigger value="general" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Général
          </TabsTrigger>
        </TabsList>

        <TabsContent value="societe" className="mt-6">
          <Card className="border-border/60 p-6">
            <h3 className="text-base font-semibold text-foreground">
              Informations société
            </h3>
            <p className="text-sm text-muted-foreground">
              Informations affichées sur les rapports.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="raison">Raison sociale</Label>
                <Input id="raison" placeholder="Groupe Gardnet Services" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ice">ICE</Label>
                <Input id="ice" placeholder="000000000000000" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="addr">Adresse</Label>
                <Input id="addr" placeholder="Adresse complète" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tel">Téléphone</Label>
                <Input id="tel" placeholder="+212 ..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mail">Email</Label>
                <Input id="mail" type="email" placeholder="contact@..." />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button>Enregistrer</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card className="border-border/60 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Utilisateurs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Un seul utilisateur actuellement. L'ajout multi-utilisateurs sera bientôt disponible.
                </p>
              </div>
              <Button>Ajouter</Button>
            </div>
            <div className="mt-4 rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Administrateur</p>
                  <p className="text-xs text-muted-foreground">admin@gardnet.local</p>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  Admin
                </span>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cats" className="mt-6">
          <ShortcutCard href="/categories" title="Gérer les catégories" description="Ajouter, modifier ou supprimer des catégories" />
        </TabsContent>

        <TabsContent value="contacts" className="mt-6">
          <ShortcutCard href="/contacts" title="Gérer les contacts" description="Répertoire des contacts professionnels" />
        </TabsContent>

        <TabsContent value="backup" className="mt-6">
          <Card className="border-border/60 p-6">
            <h3 className="text-base font-semibold text-foreground">Sauvegarde</h3>
            <p className="text-sm text-muted-foreground">
              Sauvegardez vos données ou restaurez une sauvegarde.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline">Créer une sauvegarde</Button>
              <Button variant="outline">Restaurer</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="sync" className="mt-6">
          <Card className="border-border/60 p-6">
            <h3 className="text-base font-semibold text-foreground">Synchronisation</h3>
            <p className="text-sm text-muted-foreground">
              Configurez la synchronisation cloud.
            </p>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <Label className="text-sm">Sync automatique</Label>
                <p className="text-xs text-muted-foreground">Toutes les 15 minutes</p>
              </div>
              <Switch />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="general" className="mt-6">
          <Card className="border-border/60 p-6">
            <h3 className="text-base font-semibold text-foreground">Paramètres généraux</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <Label className="text-sm">Devise</Label>
                  <p className="text-xs text-muted-foreground">DH (Dirham marocain)</p>
                </div>
                <span className="text-sm font-medium text-primary">DH</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <Label className="text-sm">Langue</Label>
                  <p className="text-xs text-muted-foreground">Français</p>
                </div>
                <span className="text-sm font-medium">FR</span>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ShortcutCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-border/60 p-0 overflow-hidden">
      <Link
        to={href}
        className="flex items-center justify-between p-5 hover:bg-accent/40 transition-colors"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </Link>
    </Card>
  );
}
