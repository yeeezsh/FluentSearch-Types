import { OAuthProviderEnum } from './enums/oauth-provider.enum';

export interface UserToken {
  provider: OAuthProviderEnum;
  token: string;
}
