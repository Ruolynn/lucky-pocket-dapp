export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect Wallet',
      description: 'Connect your Web3 wallet using RainbowKit',
    },
    {
      number: '2',
      title: 'Create Lucky Pocket',
      description: 'Set amount, quantity and blessing message',
    },
    {
      number: '3',
      title: 'Share Link',
      description: 'Share with friends via Farcaster',
    },
    {
      number: '4',
      title: 'Earn Rewards',
      description: 'Get extra rewards by inviting friends',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

