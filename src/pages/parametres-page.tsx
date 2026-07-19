import {
  Building2,
  Users,
  Tags,
  Contact,
  DatabaseBackup,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { ShortcutCard } from "@/components/cards/shortcut-card";
import { FormField } from "@/components/forms/form-field";
import { FormGrid } from "@/components/forms/form-grid";
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

export function ParametresPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Paramètres" description="Configurez votre application" />

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
          <Section
            padded
            title="Informations société"
            description="Informations affichées sur les rapports."
          >
            <FormGrid className="mt-2 gap-4">
              <FormField id="raison" label="Raison sociale">
                <Input id="raison" placeholder="Groupe Gardnet Services" />
              </FormField>
              <FormField id="ice" label="ICE">
                <Input id="ice" placeholder="000000000000000" />
              </FormField>
              <FormField id="addr" label="Adresse" className="sm:col-span-2">
                <Input id="addr" placeholder="Adresse complète" />
              </FormField>
              <FormField id="tel" label="Téléphone">
                <Input id="tel" placeholder="+212 ..." />
              </FormField>
              <FormField id="mail" label="Email">
                <Input id="mail" type="email" placeholder="contact@..." />
              </FormField>
            </FormGrid>
            <div className="mt-6 flex justify-end">
              <Button>Enregistrer</Button>
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Section
            padded
            title="Utilisateurs"
            description="Un seul utilisateur actuellement. L'ajout multi-utilisateurs sera bientôt disponible."
            actions={<Button>Ajouter</Button>}
          >
            <div className="rounded-lg border border-border p-4">
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
          </Section>
        </TabsContent>

        <TabsContent value="cats" className="mt-6">
          <ShortcutCard
            href="/categories"
            title="Gérer les catégories"
            description="Ajouter, modifier ou supprimer des catégories"
          />
        </TabsContent>

        <TabsContent value="contacts" className="mt-6">
          <ShortcutCard
            href="/contacts"
            title="Gérer les contacts"
            description="Répertoire des contacts professionnels"
          />
        </TabsContent>

        <TabsContent value="backup" className="mt-6">
          <Section
            padded
            title="Sauvegarde"
            description="Sauvegardez vos données ou restaurez une sauvegarde."
          >
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Créer une sauvegarde</Button>
              <Button variant="outline">Restaurer</Button>
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="sync" className="mt-6">
          <Section
            padded
            title="Synchronisation"
            description="Configurez la synchronisation cloud."
          >
            <div className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <Label className="text-sm">Sync automatique</Label>
                <p className="text-xs text-muted-foreground">Toutes les 15 minutes</p>
              </div>
              <Switch />
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="general" className="mt-6">
          <Section padded title="Paramètres généraux">
            <div className="space-y-3">
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
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
