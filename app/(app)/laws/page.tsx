import {
  BookOpen,
  ChevronRight,
  Calendar,
  FileText,
  Scale,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockLaws, branchLabels, branchColors } from "@/lib/mock-data";

export const metadata = {
  title: "Lector de Leyes | LegisClara",
  description: "Lee y navega leyes mexicanas completas",
};

const mockArticles = [
  { number: "1", title: "De los derechos humanos y sus garantías", preview: "En los Estados Unidos Mexicanos todas las personas gozarán de los derechos humanos reconocidos en esta Constitución..." },
  { number: "2", title: "De la nación pluricultural", preview: "La Nación Mexicana es única e indivisible. La Nación tiene una composición pluricultural sustentada originalmente en sus pueblos indígenas..." },
  { number: "3", title: "Del derecho a la educación", preview: "Toda persona tiene derecho a la educación. El Estado -Federación, Estados, Ciudad de México y Municipios- impartirá y garantizará..." },
  { number: "4", title: "De la igualdad", preview: "La mujer y el hombre son iguales ante la ley. Ésta protegerá la organización y el desarrollo de la familia..." },
  { number: "5", title: "De la libertad de trabajo", preview: "A ninguna persona podrá impedirse que se dedique a la profesión, industria, comercio o trabajo que le acomode..." },
  { number: "6", title: "De la libertad de expresión", preview: "La manifestación de las ideas no será objeto de ninguna inquisición judicial o administrativa, sino en el caso de que ataque..." },
  { number: "14", title: "De la irretroactividad", preview: "A ninguna ley se dará efecto retroactivo en perjuicio de persona alguna. Nadie podrá ser privado de la libertad..." },
  { number: "16", title: "De la seguridad jurídica", preview: "Nadie puede ser molestado en su persona, familia, domicilio, papeles o posesiones, sino en virtud de mandamiento escrito..." },
  { number: "27", title: "De la propiedad", preview: "La propiedad de las tierras y aguas comprendidas dentro de los límites del territorio nacional, corresponde originariamente a la Nación..." },
  { number: "123", title: "Del trabajo y la previsión social", preview: "Toda persona tiene derecho al trabajo digno y socialmente útil; al efecto, se promoverán la creación de empleos..." },
];

export default function LawsPage() {
  const selectedLaw = mockLaws[0];

  return (
    <div className="flex h-full flex-col animate-page-enter">
      <div className="border-b px-4 py-2.5 md:px-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <h1 className="text-sm font-medium">Lector de Leyes</h1>
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
          <span className="text-sm text-muted-foreground truncate">
            {selectedLaw.title}
          </span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-[260px] shrink-0 border-r lg:block">
          <div className="h-full overflow-y-auto">
            <div className="p-3">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Leyes
              </p>
              <div className="space-y-0.5">
                {mockLaws.slice(0, 5).map((law, i) => (
                  <button
                    key={law.id}
                    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-[background-color,color] duration-150 ease-out cursor-pointer ${
                      i === 0
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                    }`}
                  >
                    <Scale className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{law.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-4 py-6 md:px-6">
            <div className="mb-4">
              <h2 className="mb-1 text-lg font-semibold">{selectedLaw.title}</h2>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className={`text-[10px] ${branchColors[selectedLaw.branch]}`}
                >
                  {branchLabels[selectedLaw.branch]}
                </Badge>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Publicada: {selectedLaw.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {selectedLaw.articleCount} artículos
                </span>
                {selectedLaw.lastReformAt && (
                  <span>
                    Última reforma: {selectedLaw.lastReformAt}
                  </span>
                )}
              </div>
            </div>

            <Separator className="mb-4" />

            <div className="space-y-px rounded-md border animate-stagger">
              {mockArticles.map((article, i) => (
                <div
                  key={article.number}
                  className={`cursor-pointer px-3 py-2.5 transition-[background-color] duration-150 ease-out hover:bg-accent/50 ${
                    i < mockArticles.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                      Art. {article.number}
                    </span>
                    <span className="text-sm font-medium">{article.title}</span>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    {article.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
