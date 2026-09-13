import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { Dot } from "lucide-react";

export function Intro() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <Heading level={1} color="carrot">
        However you found your way here, you are probably looking for a creative
        partner.
      </Heading>

      <div className="flex flex-col items-center gap-10 pt-15">
        <Text>Could this be you?</Text>
        <Text>
          If you recognize yourself in any of these, we might be a good match:
        </Text>

        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>
              {" "}
              You’re a new business owner and don’t have any visual content yet.
            </Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>
              Your business already has visual content, but you’re looking for
              something new.
            </Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>
              You’re looking for a photographer or videographer to join your
              existing creative team.
            </Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text> You have a small-budget project with a social purpose.</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>
              You already have photos or videos and you’re only looking for
              post-production.
            </Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>
              You create your own content, or work with a colleague who does,
              but you’ve hit a wall and need some help.
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 pt-15">
        <Text>What can I help you with?</Text>

        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Videography</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Interview</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Event documentation</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Intro video about your business</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Podcast post-production</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Prezentation post-production</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Reels</Text>
          </div>

          <div className="flex items-center">
            <Dot className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <Text>Photography</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
