import { Circle, CircleProps, computed, CurveProfile, getCircleProfile, initial, nodeName, signal } from '@motion-canvas/2d';
import {
  DEG2RAD,
  SignalValue,
  SimpleSignal,
} from '@motion-canvas/core';

type CustomCircleType = 'slice' | 'arc' | 'chord';

export interface CustomCircleProps extends Omit<CircleProps, 'closed'> {
  /**
   * {@inheritDoc CustomCircle.type}
   */
  type?: SignalValue<CustomCircleType>;
}

@nodeName('CustomCircle')
export class CustomCircle extends Circle {

  /**
   * Whether the path of this circle should be a slice, and arch or a chord, as defined by Inkscape.
   *
   * See: https://inkscape-manuals.readthedocs.io/en/latest/circles-ellipses-and-arcs.html
   */
  @initial('slice')
  @signal()
  public declare readonly type: SimpleSignal<CustomCircleType, this>;

  public constructor(props: CustomCircleProps) {
    super(props);
  }


  @computed()
  public profile(): CurveProfile {
    // It seems this method is used for positioning the circle
    // I'm leaving it as is because none of my changes so far
    // affect the positioning of the circle (mainly the closed-ness)
    // TODO: keep an eye out for when this implementation doesn't work
    // anymore
    return getCircleProfile(
      this.size().scale(0.5),
      this.startAngle() * DEG2RAD,
      this.endAngle() * DEG2RAD,
      this.closed(),
      this.counterclockwise(),
    );
  }

  protected override createPath(expand = 0) {
    const path = new Path2D();
    const start = this.startAngle() * DEG2RAD;
    let end = this.endAngle() * DEG2RAD;
    const isWhole = start === 0 && end === 360 * DEG2RAD;
    const size = this.size().scale(0.5).add(expand);
    const type = this.type();

    if (end > start + Math.PI * 2) {
      const loops = Math.floor((end - start) / (Math.PI * 2));
      end -= Math.PI * 2 * loops;
    }

    if (!isWhole && type == 'slice') {
      path.moveTo(0, 0);
    }
    path.ellipse(0, 0, size.x, size.y, 0, start, end, this.counterclockwise());
    if (!isWhole && type == 'chord') {
      path.closePath();
    }

    if (!isWhole && type == 'slice') {
      path.closePath();
    }

    return path;
  }
}
