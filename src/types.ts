import { LovelaceCardConfig } from 'custom-card-helpers';

export interface CardConfig extends LovelaceCardConfig {
  title: string;
  name: string;
  password: string;
  username: string;
  sipServer: string;
  wss: string;
}
