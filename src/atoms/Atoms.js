import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const blessingNameState = atom({
  key: 'blessingNameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const blessingToneState = atom({
  key: 'blessingToneState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const blessingRelationState = atom({
  key: 'blessingRelationState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
