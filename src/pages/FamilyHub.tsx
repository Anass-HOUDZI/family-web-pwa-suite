
import React, { useState } from 'react';
import { ModernHeroSection } from "@/components/ui/modern/ModernHeroSection";
import FamilyHubSearchFilters from "@/components/family-hub/FamilyHubSearchFilters";
import FamilyHubStats from "@/components/family-hub/FamilyHubStats";
import ModernToolCard from "@/components/family-hub/ModernToolCard";
import PWAStatus from "@/components/PWAStatus";
import { PageContainer } from "@/components/ui/page-container";
import { Section } from "@/components/ui/section";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { FeatureHighlight } from "@/components/common/FeatureHighlight";
import { EmptyState } from "@/components/common/EmptyState";
import { ModernCard } from "@/components/ui/modern/ModernCard";
import { Search } from "lucide-react";
import { tools } from "@/data/toolsData";

const categories = ['Tous', 'Organisation', 'Finances', 'Éducation', 'Santé', 'Équilibre', 'Développement', 'Loisirs', 'Pratique'];

const features = [
  {
    icon: "🔒",
    title: "Confidentialité Totale",
    description: "Toutes vos données restent sur votre appareil. Zéro trace, zéro cloud, zéro pub."
  },
  {
    icon: "💝",
    title: "100% Gratuit",
    description: "Aucun abonnement, ni option payante cachée. Accès complet, sans restriction."
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Pensé Famille",
    description: "Interface ludique, intuitive, adaptée à tous les âges et accessible sur tous appareils."
  }
];

export default function FamilyHub() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'Tous' || tool.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PWAStatus />
      <ModernHeroSection />

      <main className="flex-grow">
        <PageContainer className="py-8 flex flex-col items-center">
          <FamilyHubSearchFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          {/* Plus de marge entre les filtres et les badges */}
          <div className="mt-16 mb-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            {['🔒 100% Privé', '💝 Totalement Gratuit', '📱 Multi-plateforme', '⚡ Hors Ligne'].map((feature, index) => (
              <div 
                key={feature}
                className="glass-card px-6 py-3 text-sm font-medium text-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="w-full md:w-[90%] mx-auto">
            <Section variant="transparent">
              <FamilyHubStats />
            </Section>

            <Section variant="transparent" spacing="sm">
              {filteredTools.length > 0 ? (
                <ResponsiveGrid 
                  cols={{ default: 1, sm: 2, lg: 3, xl: 4 }}
                  gap="lg"
                >
                  {filteredTools.map((tool) => (
                    <ModernToolCard tool={tool} key={tool.id} />
                  ))}
                </ResponsiveGrid>
              ) : (
                <ModernCard className="p-12 text-center">
                  <EmptyState
                    title="Aucun outil trouvé"
                    description="Essayez une autre catégorie !"
                    icon={<Search className="h-12 w-12" />}
                  />
                </ModernCard>
              )}
            </Section>

            <Section 
              variant="transparent"
              className="mt-16 md:mt-24"
              spacing="lg"
            >
              <ModernCard variant="glass" className="p-8 md:p-12">
                <div className="flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 font-space">
                    Pourquoi choisir{' '}
                    <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                      Harmonik
                    </span>{' '}
                    ?
                  </h2>
                  <ResponsiveGrid 
                    cols={{ default: 1, md: 3 }}
                    gap="lg"
                    className="max-w-5xl"
                  >
                    {features.map((feature, index) => (
                      <div 
                        key={feature.title}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <FeatureHighlight
                          icon={feature.icon}
                          title={feature.title}
                          description={feature.description}
                        />
                      </div>
                    ))}
                  </ResponsiveGrid>
                </div>
              </ModernCard>
            </Section>
          </div>
        </PageContainer>
      </main>
    </div>
  );
}
