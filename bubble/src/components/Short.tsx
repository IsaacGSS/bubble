import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
export function Short() {
  return (
    <Dialog className="text-zinc-50">
      <DialogTrigger asChild>
        <Button variant="link">Short</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creat Short Link</DialogTitle>
          <DialogDescription>
          add a key name and the original url to create a short link.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              code
            </Label>
            <Input
              id="code"
              placeholder="code name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              url
            </Label>
            <Input
              id="original_url"
              placeholder="original url"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Creat Short</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}