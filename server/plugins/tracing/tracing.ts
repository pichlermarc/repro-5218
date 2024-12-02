import { Resource } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

export default defineNitroPlugin(() => {

    // Initialize OTEL trace exporter
    const exporter = new OTLPTraceExporter();

    // Create a NodeTracerProvider instance
    const provider = new NodeTracerProvider({
        resource: new Resource({
            [SEMRESATTRS_SERVICE_NAME]: `server`
        })
    });

    provider.addSpanProcessor(
        new BatchSpanProcessor(exporter)
    );

    // Register the provider with OpenTelemetry
    provider.register();
});