import { useState } from 'react';

export function useProfileExample() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [name, setName] = useState('Rikka Inohana');
  const [draftName, setDraftName] = useState(name);
  return {
    profileOpen,
    setProfileOpen,
    name,
    setName,
    draftName,
    setDraftName,
  };
}

export type ProfileExampleState = ReturnType<typeof useProfileExample>;
