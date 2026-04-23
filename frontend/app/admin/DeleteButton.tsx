"use client";

import { Trash2 } from "lucide-react";

type Props = {
  action: () => Promise<void>;
  confirmMessage?: string;
};

export function DeleteButton({ action, confirmMessage = "Hapus item ini?" }: Props) {
  return (
    <form
      action={async () => {
        if (confirm(confirmMessage)) await action();
      }}
    >
      <button
        type="submit"
        className="p-2 rounded-lg text-ink-soft hover:text-navy hover:bg-navy-50 transition-colors"
      >
        <Trash2 size={15} />
      </button>
    </form>
  );
}
