{{/* Generate chart name */}}
{{- define "capannogourmet.name" -}}
capannogourmet
{{- end -}}

{{/* Generate full name */}}
{{- define "capannogourmet.fullname" -}}
{{ include "capannogourmet.name" . }}
{{- end -}}