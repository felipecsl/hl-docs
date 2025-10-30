import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Deterministic',
    Svg: require('@site/static/img/deterministic.svg').default,
    description: (
      <>
        Deploy exactly the pushed commit — no working tree drift. Images are built from <code>git archive</code> of the SHA.
      </>
    ),
  },
  {
    title: 'Explicit',
    Svg: require('@site/static/img/explicit.svg').default,
    description: (
      <>
        No auto-updaters. <code>hl</code> performs restarts and gates on health, so you always know what’s running.
      </>
    ),
  },
  {
    title: 'Boring Primitives',
    Svg: require('@site/static/img/boring.svg').default,
    description: (
      <>
        Git, Docker (Buildx), Traefik, Docker Compose, systemd. Easy to reason about, easy to recover.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
