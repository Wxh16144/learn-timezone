// global.d.ts
declare global {
  /**
     * The timezone of the user
     * @example 'America/New_York' or 'Asia/Shanghai'
     * @see: 
     *  - https://www.timeanddate.com/time/map/
     *  - https://www.timeanddate.com/time/zones/
     */
  declare const __TIMEZONE__: string;
}

export { }