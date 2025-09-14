import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getCurrentDayStats } from '@/utils/dataProcessing';
import Billing from '@/components/Billing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Download, History, DollarSign } from 'lucide-react';

const BillingPage = () => {
  const { user } = useAuth();

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const currentStats = getCurrentDayStats(user.houseNumber);

  // Mock data for Billing component
  // TODO: Replace with real data from your backend/API
  const mockBillingData = {
    dailyConsumption: currentStats.consumption, // Using current consumption from existing data
    target: 25.0, // Daily target consumption in kWh
    tolerance: 5.0, // Tolerance before billing kicks in
    ratePerKwh: 8.5 // Rate per kWh for excess consumption
  };

  // Mock payment history data
  // TODO: Replace with real payment history from your backend/API
  const paymentHistory = [
    { date: '2024-09-10', amount: 45.50, status: 'Paid', consumption: 30.2 },
    { date: '2024-09-05', amount: 0.00, status: 'No charge', consumption: 22.1 },
    { date: '2024-08-28', amount: 17.25, status: 'Paid', consumption: 27.8 },
    { date: '2024-08-20', amount: 0.00, status: 'No charge', consumption: 24.5 },
  ];

  const excessConsumption = Math.max(0, mockBillingData.dailyConsumption - (mockBillingData.target + mockBillingData.tolerance));
  const payableAmount = excessConsumption * mockBillingData.ratePerKwh;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            House {user.houseNumber} - Billing & Payment
          </h1>
          <p className="text-muted-foreground">
            Manage your energy billing, payments, and view consumption history
          </p>
        </div>

        {/* Quick Payment Card - Only show if there's an amount due */}
        {payableAmount > 0 && (
          <Card className="mb-8 border-orange-200 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <CreditCard className="h-5 w-5" />
                Payment Due
              </CardTitle>
              <CardDescription>
                You have an outstanding balance for excess consumption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-2xl font-bold text-orange-700">₹{payableAmount.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">
                    For {excessConsumption.toFixed(1)} kWh excess consumption
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Bill
                  </Button>
                  <Button size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Billing Component */}
        <div className="mb-8">
          <Billing
            houseNumber={user.houseNumber}
            dailyConsumption={mockBillingData.dailyConsumption}
            target={mockBillingData.target}
            tolerance={mockBillingData.tolerance}
            ratePerKwh={mockBillingData.ratePerKwh}
          />
        </div>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Payment History
            </CardTitle>
            <CardDescription>
              Your recent billing and payment transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Consumption</th>
                    <th className="text-right py-3 px-2">Amount</th>
                    <th className="text-center py-3 px-2">Status</th>
                    <th className="text-center py-3 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">{payment.date}</td>
                      <td className="py-3 px-2">{payment.consumption} kWh</td>
                      <td className="py-3 px-2 text-right font-medium">
                        ₹{payment.amount.toFixed(2)}
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant={payment.status === 'Paid' ? 'default' : 'secondary'}>
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Billing Information Footer */}
        <div className="mt-8 p-6 rounded-lg bg-muted/30">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Billing Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Daily Target:</strong> {mockBillingData.target} kWh</p>
              <p><strong>Tolerance:</strong> {mockBillingData.tolerance} kWh</p>
            </div>
            <div>
              <p><strong>Rate per excess kWh:</strong> ₹{mockBillingData.ratePerKwh}</p>
              <p><strong>Billing cycle:</strong> Daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;