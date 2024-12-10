'use client'
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useState } from "react"
interface Props {
    tone : string,
    name : string,
    setTone : (tone: string) => void
}

const ToneForm = ({tone, name, setTone} : Props) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="py-1 w-full">
            <div className="text-2xl font-bold text-black">
                Tone
            </div>
            <div className="text-base text-black/60 mb-2">
                This movie was...
            </div>

        <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild className="w-full ">
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-black"
            >
            {tone
                ? frameworks.find((framework) => framework.value === tone)?.value
                : "Select tone..."}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 border-none">
            <Command className="w-full bg-white rounded-xl">
            <CommandInput placeholder="Search tone..." />
            <CommandList>
            <CommandEmpty>No tone found.</CommandEmpty>
                <CommandGroup>
                {frameworks.map((framework) => (
                    <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue : any) => {
                        setTone(currentValue === tone ? "" : currentValue)
                        setOpen(false)
                    }}
                    >
                    {framework.value}
                    
                    </CommandItem>
                ))}
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
        <div className="my-20">

        </div>
        </div>
    )
}


export default ToneForm


const frameworks = [
    {
      value: "Scathing",
    },
    {
      value: "Sarcastic",
    },
    {
      value: "Melancholic",
    },
    {
      value: "Bittersweet",
    },
    {
      value: "Ironic",
    },
    {
      value : 'Cynical'
    },
    {
      value: 'Angry'
    },
    {
      value : 'Nostalgic'
    },
    {
      value : "Hopeful"
    },
    {
      value : 'Frustrated'
    },
    {
      value : 'Joyful'
    },
    {
      value : "Apathetic"
    },
    {
      value : 'Anxious'
    },
    {
      value : "Content"
    },
    {
      value : "Disappointed"
    }
  ]

  











