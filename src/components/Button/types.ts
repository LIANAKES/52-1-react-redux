import { ReactNode } from 'react';

export interface MainButtonProps  {
    name?: string,
    type?: 'submit' | 'button' | 'reset',
    onClick?: () => void;
    disabled?: boolean;
    children?: ReactNode;
}
