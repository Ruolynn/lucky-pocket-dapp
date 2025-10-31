export function Stats() {
  const stats = [
    { label: 'Active Users', value: '12.5K' },
    { label: 'Total Lucky Pockets', value: '45.2K' },
    { label: 'Total Volume', value: '$2.8M' },
    { label: 'Completion Rate', value: '98.5%' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Platform Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

