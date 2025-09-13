import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Lightbulb, 
  Cpu, 
  Smartphone, 
  TrendingUp,
  Shield,
  Zap,
  Leaf
} from 'lucide-react';

const About = () => {
  const technologies = [
    'IoT Sensors',
    'Raspberry Pi',
    'Arduino',
    'Cloud Analytics',
    'Machine Learning',
    'React Dashboard',
    'Real-time Monitoring',
    'Predictive Maintenance'
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      title: '15% Efficiency Improvement',
      description: 'Optimized energy management through real-time monitoring and predictive analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Cross-platform mobile application for remote monitoring and control'
    },
    {
      icon: Shield,
      title: 'Predictive Maintenance',
      description: 'AI-powered system health monitoring reduces downtime by 30%'
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint Reduction',
      description: 'Significant reduction in CO2 emissions through optimized renewable energy usage'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About the Project
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An innovative IoT-based renewable energy monitoring system designed to optimize 
            microgrid performance in rural communities across Odisha.
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-destructive/10">
                <Target className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <CardTitle>Problem Statement</CardTitle>
                <CardDescription>Addressing energy challenges in rural Odisha</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Current Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unreliable power supply in remote rural areas</li>
                  <li>• Limited access to grid electricity infrastructure</li>
                  <li>• High dependency on diesel generators</li>
                  <li>• Lack of real-time energy monitoring systems</li>
                  <li>• Inefficient energy usage patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Proposed Solution</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Smart microgrid with solar and wind integration</li>
                  <li>• Real-time IoT monitoring and analytics</li>
                  <li>• Predictive maintenance algorithms</li>
                  <li>• Mobile and web-based monitoring dashboards</li>
                  <li>• Community-based energy management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Feasibility */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-primary">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle>Technical Feasibility</CardTitle>
                <CardDescription>Cutting-edge technology stack for reliable monitoring</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="p-4 rounded-lg bg-solar/10 mb-4 inline-block">
                  <Cpu className="h-8 w-8 text-solar mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">IoT Hardware</h3>
                <p className="text-sm text-muted-foreground">
                  Raspberry Pi and Arduino-based sensor networks for real-time data collection
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 rounded-lg bg-wind/10 mb-4 inline-block">
                  <Zap className="h-8 w-8 text-wind mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Cloud Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable cloud infrastructure for data processing and machine learning analytics
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 rounded-lg bg-battery/10 mb-4 inline-block">
                  <Smartphone className="h-8 w-8 text-battery mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">User Interface</h3>
                <p className="text-sm text-muted-foreground">
                  Responsive web and mobile applications for monitoring and control
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expected Outcomes */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-battery">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle>Expected Outcomes</CardTitle>
                <CardDescription>Measurable impacts on rural energy infrastructure</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="p-3 rounded-lg gradient-primary flex-shrink-0">
                    <outcome.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{outcome.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t">
          <p className="text-lg font-medium mb-2">Government of Odisha</p>
          <p className="text-muted-foreground">Electronics & IT Department</p>
        </div>
      </div>
    </div>
  );
};

export default About;