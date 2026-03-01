

/**
 * A port to expose configuration settings
 */
export interface Config {
  /**
   * The length of time a user JWT is valid for
   */
  jwtValidity: string
  /**
   * The length of time a Refresh Token is valid for
   */
  refreshTokenValidity: string
}
