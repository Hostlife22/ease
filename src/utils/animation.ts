export class Animation {
  static textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: custom * 0.8 },
    }),
  };

  static transition = { type: 'tween', duration: 3 };
}
