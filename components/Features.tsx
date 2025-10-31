export function Features() {
  const features = [
    {
      title: 'Secure & Reliable',
      description: 'Built on Base chain with smart contract security',
      icon: '🔒',
    },
    {
      title: 'Instant Settlement',
      description: 'Fast transaction processing on Base network',
      icon: '⚡',
    },
    {
      title: 'Social Interaction',
      description: 'Share and connect with friends on Farcaster',
      icon: '👥',
    },
  ]

  const coreFeatures = [
    {
      title: 'Create Lucky Pockets',
      description: 'Support fixed amount and lucky draw modes, customize packet quantity and blessing messages',
      bullets: [
        'Support USDC/USDT',
        'VRF Random Algorithm',
        '7-day Validity',
      ],
      icon: '🎁',
    },
    {
      title: 'Invite Rewards',
      description: 'Invite friends to register and earn rewards, build your lucky pocket social network',
      bullets: [
        '$2 per referral',
        'Boost claiming power',
        'Permanent commission',
      ],
      icon: '💰',
    },
    {
      title: 'Leaderboards',
      description: 'Multi-dimensional leaderboards showcasing your luck and generosity',
      bullets: [
        'Lucky Board',
        'Generous Board',
        'Active Board',
      ],
      icon: '📊',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                    <span className="mr-2">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

